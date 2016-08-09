(function($) {
	var iPhone = (window.orientation != undefined);

	$.mask = {
		definitions: {
			'9': '[0-9]',
			'z': '[a-zA-Z]',
			'*': '[0-9a-zA-Z]'
		}
	};

	$.fn.extend({
		caret: function(begin, end) {
			if (typeof begin == 'number') {
				if (typeof end != 'number') {
					end = begin;
				}

				return this.each(function() {
					this.setSelectionRange(begin, end);
				});
			} else {
				return {
					begin: this[0].selectionStart,
					end: this[0].selectionEnd
				};
			}
		},
		mask: function(mask, settings) {
			settings = $.extend({
				placeholder: '_',
				completed: null
			}, settings);

			var defs = $.mask.definitions;
			var tests = [];
			var len = mask.length;
			var partialPosition = len;
			var firstNonMaskPos = null;

			$.each(mask.split(''), function(i, c) {
				if (c == '?') {
					len--;
					partialPosition = i;
				} else if (defs[c]) {
					tests.push(RegExp(defs[c]));

					if (firstNonMaskPos == null) {
						firstNonMaskPos = tests.length - 1;
					}
				} else {
					tests.push(null);
				}
			});

			return this.each(function() {
				var input = $(this);
				var buffer = $.map(mask.split(''), function(c, i) {
					if (c != '?') {
						return defs[c] ? settings.placeholder : c;
					}
				});
				var ignore = false; // Variable for ignoring control keys
				var focusValue = input.val();

				input.data('buffer', buffer);
				input.data('tests', tests);

				function seekNext(pos) {
					while (++pos <= len && !tests[pos]);
					return pos;
				}

				function shiftL(pos) {
					while (!tests[pos] && --pos >= 0);

					for (var i = pos; i < len; i++) {
						if (tests[i]) {
							buffer[i] = settings.placeholder;
							
							var j = seekNext(i);

							if (j < len && tests[i].test(buffer[j])) {
								buffer[i] = buffer[j];
							} else {
								break;
							}
						}
					}

					writeBuffer();
					input.caret(Math.max(firstNonMaskPos, pos));
				};

				function shiftR(pos) {
					for (var i = pos, c = settings.placeholder; i < len; i++) {
						if (tests[i]) {
							var j = seekNext(i);
							var t = buffer[i];
							
							buffer[i] = c;

							if (j < len && tests[j].test(t)) {
								c = t;
							} else {
								break;
							}
						}
					}
				};

				function keydownEvent(e) {
					var pos = $(this).caret();
					var k = e.keyCode;
					ignore = (k < 16 || (k > 16 && k < 32) || (k > 32 && k < 41));

					// delete selection before proceeding
					if ((pos.begin - pos.end) != 0 && (!ignore || k == 8 || k == 46)) {
						clearBuffer(pos.begin, pos.end);
					}

					// backspace, delete, and escape get special treatment
					if (k == 8 || k == 46 || (iPhone && k == 127)) { // backspace/delete
						shiftL(pos.begin + (k == 46 ? 0 : -1));
						return false;
					} else if (k == 27) { // Escape
						input.val(focusValue);
						input.caret(0, checkVal());
						return false;
					}
				};

				function keypressEvent(e) {
					if (ignore) {
						ignore = false;
						// Fixes Mac FF bug on backspace
						return e.keyCode == 8 ? false : null;
					}

					e = e || window.event;

					var k = e.charCode || e.keyCode || e.which;
					var pos = $(this).caret();

					if (e.ctrlKey || e.altKey || e.metaKey) { // Ignore
						return true;
					} else if ((k >= 32 && k <= 125) || k > 186) { // typeable characters
						var p = seekNext(pos.begin - 1);

						if (p < len) {
							var c = String.fromCharCode(k);

							if (tests[p].test(c)) {
								shiftR(p);
								buffer[p] = c;
								writeBuffer();

								var next = seekNext(p);

								$(this).caret(next);

								if (settings.completed && next == len) {
									settings.completed.call(input);
								}
							}
						}
					}

					return false;
				};

				function clearBuffer(start, end) {
					for (var i = start; i < end && i < len; i++) {
						if (tests[i]) {
							buffer[i] = settings.placeholder;
						}
					}
				};

				function writeBuffer() {
					return input.val(buffer.join('')).val();
				}

				function checkVal(allow) {
					// try to place characters where they belong
					var value = input.val();
					var lastMatch = -1;

					for (var i = 0, pos = 0; i < len; i++) {
						if (tests[i]) {
							buffer[i] = settings.placeholder;

							while (pos++ < value.length) {
								var c = value.charAt(pos - 1);

								if (tests[i].test(c)) {
									buffer[i] = c;
									lastMatch = i;
									break;
								}
							}

							if (pos > value.length) {
								break;
							}
						} else if (buffer[i] == value[pos] && i != partialPosition) {
							pos++;
							lastMatch = i;
						} 
					}

					if (!allow && lastMatch + 1 < partialPosition) {
						input.val('');
						clearBuffer(0, len);
					} else if (allow || lastMatch + 1 >= partialPosition) {
						writeBuffer();

						if (!allow) {
							input.val(input.val().substring(0, lastMatch + 1));
						}
					}

					return partialPosition ? i : firstNonMaskPos;
				};

				input
					.bind('focus.mask', function() {
						focusValue = input.val();

						var pos = checkVal();

						writeBuffer();

						setTimeout(function() {
							if (pos == mask.length) {
								input.caret(0, pos);
							} else {
								input.caret(pos);
							}
						}, 1);
					})
					.bind('blur.mask', function() {
						checkVal();

						if (input.val() != focusValue) {
							input.change();
						}
					})
					.bind('keydown.mask', keydownEvent)
					.bind('keypress.mask', keypressEvent)
					.bind('input.mask', function() {
						setTimeout(function() {
							input.caret(checkVal(true));
						}, 1);
					});

				checkVal();
			});
		}
	});
})(jQuery);

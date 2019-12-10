export function nodeContains(node: Node, otherNode: Node, stopNode: Node = document.body): boolean {
	for (let n = otherNode.parentElement; n; n = n.parentElement) {
		if (n == node) {
			return true;
		}
		if (n == stopNode) {
			break;
		}
	}

	return false;
}

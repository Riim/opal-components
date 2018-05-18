import { ObservableList } from 'cellx';
import { ObservableTreeList } from 'opal-components';
import { BaseComponent, Component, formatters } from 'rionite';
import template from './template.nelm';

formatters.log = (msg: any): any => {
	console.log(msg);
	return msg;
};

@Component({
	template
})
export class OpalComponentsDocs extends BaseComponent {
	dataList1 = new ObservableList([
		{ id: '1', name: '1' },
		{ id: '2', name: '2' },
		{ id: '3', name: '3' }
	]);

	dataTreeList1 = new ObservableTreeList([
		{ id: '1', name: '1' },
		{ id: '2', name: '2' },
		{
			id: '3',
			name: '3',
			children: [
				{
					id: '3.1',
					name: '3.1',
					children: [
						{ id: '3.1.1', name: '3.1.1' },
						{
							id: '3.1.2',
							name: '3.1.2',
							children: [
								{ id: '3.1.2.1', name: '3.1.2.1' },
								{ id: '3.1.2.2', name: '3.1.2.2' }
							]
						}
					]
				},
				{ id: '3.2', name: '3.2' },
				{ id: '3.3', name: '3.3' }
			]
		},
		{
			id: '4',
			name: '4',
			children: [{ id: '4.1', name: '4.1' }, { id: '4.2', name: '4.2' }]
		},
		{ id: '5', name: '5' }
	]);

	dataProvider1 = (() => {
		let items: Array<{ id: string; name: string; parent: string }> = [];

		for (let i = 0, l = 1000; i < l; i++) {
			items[i] = { id: i.toString(), name: 'item_' + i, parent: 'parent_' + i };
		}

		return {
			getItems: (count: number, after: string | null, query: string | null) => {
				if (count === undefined) {
					count = 50;
				}

				let filteredItems = query
					? items.filter(item => {
							return item.name.indexOf(query) != -1;
					  })
					: items;
				let from = after
					? filteredItems.findIndex(item => {
							return item.id == after;
					  }) + 1
					: 0;

				return new Promise<{
					items: Array<{ id: string; name: string; parent: string }>;
					total: number;
				}>(resolve => {
					setTimeout(() => {
						resolve({
							items: filteredItems.slice(from, from + count),
							total: filteredItems.length
						});
					}, 500);
				});
			}
		};
	})();

	dataProvider2 = (() => {
		let items = [
			{ id: '0', name: 'Shanghai' },
			{ id: '1', name: 'Karachi' },
			{ id: '2', name: 'Beijing' },
			{ id: '3', name: 'Delhi' },
			{ id: '4', name: 'Lagos' },
			{ id: '5', name: 'Tianjin' },
			{ id: '6', name: 'Istanbul' },
			{ id: '7', name: 'Tokyo' },
			{ id: '8', name: 'Guangzhou' },
			{ id: '9', name: 'Mumbai' },
			{ id: '10', name: 'Moscow' },
			{ id: '11', name: 'São Paulo' },
			{ id: '12', name: 'Shenzhen' },
			{ id: '13', name: 'Jakarta' },
			{ id: '14', name: 'Lahore' },
			{ id: '15', name: 'Seoul' },
			{ id: '16', name: 'Kinshasa' },
			{ id: '17', name: 'Cairo' },
			{ id: '18', name: 'Mexico City' },
			{ id: '19', name: 'Lima' }
		];

		return {
			getItems(query: string | null) {
				return new Promise<{ items: Array<{ id: string; name: string }> }>(resolve => {
					setTimeout(() => {
						resolve({
							items: query
								? items.filter(item => {
										return (
											item.name.toLowerCase().indexOf(query.toLowerCase()) !=
											-1
										);
								  })
								: items
						});
					}, 500);
				});
			}
		};
	})();

	viewModel1 = new ObservableList([
		{ id: '1', name: 'item_1', disabled: true },
		{ id: '2', name: 'item_2', disabled: true },
		{ id: '5', name: 'item_5' }
	]);

	addNewItem1(name: string): Promise<{ id: string; name: string }> {
		return Promise.resolve({ id: '__' + Math.random(), name });
	}
}

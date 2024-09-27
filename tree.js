import Node from './node.js';

export default class Tree {
	constructor(inputArray) {
		this.root = this.buildTree(inputArray);
	}

	buildTree(array) {
		//Sort array
		const sortedArr = array.sort((a, b) => a - b);

		//Remove duplicates
		const removedDuplicatesArr = sortedArr.filter(
			(element, index, array) => element !== array[index - 1] || index === 0
		);

		//Create Binary Search Tree
		const root = this.createBST(removedDuplicatesArr, 0, removedDuplicatesArr.length - 1);

		//Visualize the Tree
		this.prettyPrint(root);

		return root;
	}

	createBST(array, start, end) {
		if (start > end) {
			return null;
		}

		const mid = Math.floor((start + end) / 2);
		const node = new Node(array[mid]);

		node.left = this.createBST(array, start, mid - 1);
		node.right = this.createBST(array, mid + 1, end);
		return node;
	}

	prettyPrint(node, prefix = '', isLeft = true) {
		if (node === null) {
			return;
		}
		if (node.right !== null) {
			this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
		}
		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
		if (node.left !== null) {
			this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
		}
	}
}

import Node from './node.js';

export default class Tree {
	constructor(inputArray) {
		this.rootNode = this.buildTree(inputArray);
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

	insert(value) {
		this.rootNode = this.insertRecursive(this.rootNode, value);
	}

	insertRecursive(node, value) {
		// If the current node is null, create a new node with the value
		if (node === null) {
			return new Node(value);
		}

		// If the value is less, go left
		if (value < node.data) {
			node.left = this.insertRecursive(node.left, value);
		}
		// If the value is greater, go right
		else if (value > node.data) {
			node.right = this.insertRecursive(node.right, value);
		}
		// If the value is equal, do nothing (no duplicates allowed)

		// Return the current node
		return node;
	}
}

import Node from './node.js';

export default class Tree {
	constructor(inputArray) {
		this.rootNode = this.buildTree(inputArray);
	}

	buildTree(array) {
		if (!array || array.length === 0) {
			return null;
		}

		//Sort array
		const sortedArr = array.sort((a, b) => a - b);

		//Remove duplicates
		const removedDuplicatesArr = sortedArr.filter(
			(element, index, array) => element !== array[index - 1] || index === 0
		);

		//Create Binary Search Tree
		const root = this.createBST(removedDuplicatesArr, 0, removedDuplicatesArr.length - 1);

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

	delete(value) {
		this.rootNode = this.deleteRecursive(this.rootNode, value);
	}

	deleteRecursive(node, value) {
		if (node === null) return null;

		//Call next left node if value is smaller then current node
		if (value < node.data) {
			node.left = this.deleteRecursive(node.left, value);
			//Call next right node if value is greater then current node
		} else if (value > node.data) {
			node.right = this.deleteRecursive(node.right, value);
		} else {
			//If the node has no children
			if (node.left === null && node.right === null) {
				return null;
			}

			//If only left child, replace node with left child
			if (node.left !== null && node.right === null) {
				return node.left;
			}

			//If only right child, replace node with right child
			if (node.right !== null && node.left === null) {
				return node.right;
			}

			//If two children, replace node with smallest node on the right side
			if (node.left !== null && node.right !== null) {
				const smallestRightSideNode = this.findSmallestNode(node.right);
				const smallestRightSideValue = smallestRightSideNode.data;

				//Don't replace node as is, just the data to maintain the right order
				node.data = smallestRightSideValue;

				//Delete the next smallest Node, since we use it as new parant node
				node.right = this.deleteRecursive(node.right, smallestRightSideValue);
			}
		}
		return node;
	}

	findSmallestNode(node) {
		let currentNode = node;
		while (currentNode.left !== null) {
			currentNode = currentNode.left;
		}
		return currentNode;
	}

	find(value) {
		return this.findRecursive(this.rootNode, value);
	}

	findRecursive(node, value) {
		// Base case: if the current node is null, the value is not found
		if (node === null) return null;

		// Call next left node if value is smaller than current node
		if (value < node.data) {
			return this.findRecursive(node.left, value); // Continue searching in the left subtree
		}
		// Call next right node if value is greater than current node
		else if (value > node.data) {
			return this.findRecursive(node.right, value); // Continue searching in the right subtree
		} else {
			return node; // Return the node if the value is found
		}
	}

	levelOrder(callback) {
		if (callback === null || callback === undefined) {
			throw new Error('No callback provided');
		}

		if (this.rootNode === null) {
			return;
		}
		const queue = [];
		queue.push(this.rootNode);

		while (queue.length > 0) {
			const currentNode = queue.shift();
			callback(currentNode);

			if (currentNode.left !== null) {
				queue.push(currentNode.left);
			}

			if (currentNode.right !== null) {
				queue.push(currentNode.right);
			}
		}
	}

	//left -> root -> right
	inOrder(callback) {
		if (callback === null || callback === undefined) {
			throw new Error('No callback provided');
		}

		if (this.rootNode === null) {
			return;
		}

		this.inOrderRecursive(this.rootNode, callback);
	}

	inOrderRecursive(node, callback) {
		if (node === null) {
			return;
		}
		this.inOrderRecursive(node.left, callback);
		callback(node);
		this.inOrderRecursive(node.right, callback);
	}

	//root -> left -> right
	preOrder(callback) {
		if (callback === null || callback === undefined) {
			throw new Error('No callback provided');
		}

		if (this.rootNode === null) {
			return;
		}

		this.preOrderRecursive(this.rootNode, callback);
	}

	preOrderRecursive(node, callback) {
		if (node === null) {
			return;
		}
		callback(node);
		this.preOrderRecursive(node.left, callback);
		this.preOrderRecursive(node.right, callback);
	}

	//left -> right -> root
	postOrder(callback) {
		if (callback === null || callback === undefined) {
			throw new Error('No callback provided');
		}

		if (this.rootNode === null) {
			return;
		}

		this.postOrderRecursive(this.rootNode, callback);
	}

	postOrderRecursive(node, callback) {
		if (node === null) {
			return;
		}

		this.postOrderRecursive(node.left, callback);
		this.postOrderRecursive(node.right, callback);
		callback(node);
	}

	height(node) {
		if (node === null) {
			return -1;
		}

		const leftHeight = this.height(node.left);
		const rightHeight = this.height(node.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}

	depth(node) {
		if (node === null) {
			return null;
		}

		let currentNode = this.rootNode;
		let depthCounter = 0;

		while (currentNode !== null) {
			if (node.data === currentNode.data) {
				return depthCounter;
			}

			if (node.data < currentNode.data) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}

			depthCounter++;
		}

		return null;
	}

	isBalanced() {
		return this.checkBalanceRecursiv(this.rootNode);
	}

	//there is a more efficient way but this one is more readable and since its just a test project its not that important
	checkBalanceRecursiv(node) {
		if (node === null) {
			return true;
		}

		const leftHeight = this.height(node.left);
		const rightHeight = this.height(node.right);

		if (Math.abs(leftHeight - rightHeight) > 1) {
			return false;
		}

		return this.checkBalanceRecursiv(node.left) && this.checkBalanceRecursiv(node.right);
	}

	rebalance() {
		const newInputArray = [];
		this.inOrder((node) => newInputArray.push(node.data));
		this.rootNode = this.buildTree(newInputArray);
	}
}

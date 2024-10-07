import Tree from './tree.js';

function testInsertion() {
	console.log('\nInsert tests:\n');
	const tree = new Tree([5, 4, 3, 2, 3, 1]); // Initialize tree with values

	// Visualize the tree after initial creation
	console.log('Initial tree:');
	tree.prettyPrint(tree.rootNode);

	console.log('\nInsert a new value (8)');
	tree.insert(8); // Insert a new value
	console.log('\nTree after insertion:');
	tree.prettyPrint(tree.rootNode);

	console.log('\nTry to insert a duplicate value (2)');
	tree.insert(2); // Attempt to insert a duplicate
	console.log('\nTree after insertion of existing value:');
	tree.prettyPrint(tree.rootNode);
	console.log('________________________________________');
}

testInsertion();

function testDelete() {
	console.log('\nDelete tests:\n');
	const tree = new Tree([5, 4, 3, 2, 3, 1, 6, 7, 8, 9, 10, 11]); // Initialize tree with values

	// Visualize the tree after initial creation
	console.log('Initial tree:');
	tree.prettyPrint(tree.rootNode);

	console.log('\nDelete a leaf node (1)');
	tree.delete(1); // Delete a leaf node
	tree.prettyPrint(tree.rootNode);

	console.log('\nDelete a node with one child (10)');
	tree.delete(10); // Delete a node with one child
	tree.prettyPrint(tree.rootNode);

	console.log('\nDelete a node with two children (3)');
	tree.delete(3); // Delete a node with two children
	tree.prettyPrint(tree.rootNode);
	console.log('________________________________________');
}

testDelete();

function testFind() {
	console.log('\nFind tests:\n');
	// Initialize the tree with an array of values
	const tree = new Tree([5, 4, 3, 2, 3, 1, 6, 7, 8, 9, 10, 11]);

	// Visualize the tree after initial creation
	console.log('Initial tree:');
	tree.prettyPrint(tree.rootNode);

	console.log('\nFind a value that exists (3)');
	// Attempt to find an existing value and log the result
	const foundNode1 = tree.find(3);
	console.log(foundNode1 ? `Found node: ${foundNode1.data}` : 'Node not found');

	console.log('\nFind a value that does not exist (15)');
	// Attempt to find a non-existing value and log the result
	const foundNode2 = tree.find(15);
	console.log(foundNode2 ? `Found node: ${foundNode2.data}` : 'Node not found');

	console.log('________________________________________');
}

testFind();

function testLevelOrder() {
	console.log('\nLevel Order tests:\n');
	const tree = new Tree([5, 4, 3, 2, 1, 6, 7, 8]); // Initialize tree with values

	// Visualize the tree after initial creation
	console.log('Initial tree:');
	tree.prettyPrint(tree.rootNode);

	// Test with a callback that logs the node data
	console.log('\nTraverse tree in level order (log each node):');
	tree.levelOrder((node) => console.log(`Visited node: ${node.data}`));

	// Test for missing callback
	console.log('\nTest for missing callback (should throw an error):');
	try {
		tree.levelOrder(); // Call without a callback
	} catch (error) {
		console.error(`Error caught: ${error.message}`);
	}

	console.log('________________________________________');
}

testLevelOrder();

function testInDepthTraversal() {
	console.log('\nIn-Depth Traversal tests: \n');
	const tree = new Tree([5, 4, 3, 2, 1, 6, 7, 8]);

	// Visualize the tree after initial creation
	console.log('Initial tree:');
	tree.prettyPrint(tree.rootNode);

	console.log('\nExpected In-Order Traversal Output: 1, 2, 3, 4, 5, 6, 7, 8');
	console.log('In-Order Traversal:');
	tree.inOrder((node) => console.log(node.data)); // Callback for in-order traversal

	console.log('\nExpected Pre-Order Traversal Output: 4, 2, 1, 3, 6, 5, 7, 8');
	console.log('Pre-Order Traversal:');
	tree.preOrder((node) => console.log(node.data)); // Callback for pre-order traversal

	console.log('\nExpected Post-Order Traversal Output: 1, 3, 2, 5, 8, 7, 6, 4');
	console.log('Post-Order Traversal:');
	tree.postOrder((node) => console.log(node.data)); // Callback for post-order traversal

	// Testing error handling for missing callback
	console.log('\nTesting error handling for missing callback:');
	try {
		tree.inOrder(); // No callback provided
	} catch (error) {
		console.error(error.message); // Should print "No callback provided"
	}

	try {
		tree.preOrder(); // No callback provided
	} catch (error) {
		console.error(error.message); // Should print "No callback provided"
	}

	try {
		tree.postOrder(); // No callback provided
	} catch (error) {
		console.error(error.message); // Should print "No callback provided"
	}

	console.log('________________________________________');
}

testInDepthTraversal();

function testHeight() {
	console.log('\nHeight tests: \n');
	const tree = new Tree([5, 4, 3, 2, 1, 6, 7, 8]);

	// Visualize the tree after initial creation
	console.log('Initial tree:');
	tree.prettyPrint(tree.rootNode);

	console.log('Expected Height of node (5): 0 , Actual height:', tree.height(tree.find(5)));
	console.log('Expected Height of node (6): 2 , Actual height:', tree.height(tree.find(6)));
	console.log('Expected Height of node (4): 3 , Actual height:', tree.height(tree.find(4)));
	console.log('Expected Height of non-existent node: -1 , Actual height::', tree.height(tree.find(10))); // Should return -1
	console.log('________________________________________');
}

testHeight();

function testDepth() {
	console.log('\nDepth tests: \n');
	const tree = new Tree([5, 4, 3, 2, 1, 6, 7, 8]);

	// Visualize the tree after initial creation
	console.log('Initial tree:');
	tree.prettyPrint(tree.rootNode);

	console.log('Expected Depth of root (8): 3 , Actual height:', tree.depth(tree.find(8)));
	console.log('Expected Depth of node (6): 1 , Actual height:', tree.depth(tree.find(6)));
	console.log('Expected Depth of node (4): 0 , Actual height:', tree.depth(tree.find(4)));
	console.log('Expected Depth of non-existent node: null, Actual height::', tree.depth(tree.find(10)));
	console.log('________________________________________');
}

testDepth();

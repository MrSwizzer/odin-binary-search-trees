import Tree from './tree.js';

function testInsertion() {
	console.log('\nInsert tests:');
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
	console.log('\nDelete tests:');
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

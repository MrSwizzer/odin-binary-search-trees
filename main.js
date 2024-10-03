import Tree from './tree.js';

function testInsertion() {
	const tree = new Tree([5, 4, 3, 2, 3, 1]);

	//Test normal insertion
	tree.insert(8);
	console.log(tree.prettyPrint(tree.rootNode));

	//Test existing value
	tree.insert(2);
	console.log(tree.prettyPrint(tree.rootNode));
}

testInsertion();

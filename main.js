import LinkedList from './linkedList.js';

// Erstelle eine neue LinkedList
const list = new LinkedList();

// Test für append()
list.append('dog');
list.append('cat');
list.append('parrot');

console.log('Append Tests:');
console.log(`Erster Knoten (head) Wert: ${list.head.value} (Erwartet: "dog")`);
console.log(`Zweiter Knoten Wert: ${list.head.nextNode.value} (Erwartet: "cat")`);
console.log(`Dritter Knoten Wert: ${list.head.nextNode.nextNode.value} (Erwartet: "parrot")`);
console.log(`Nächster Knoten nach parrot: ${list.head.nextNode.nextNode.nextNode} (Erwartet: null)`);

// Test für prepend()
const list2 = new LinkedList();
list2.prepend('dog');
list2.prepend('cat');
list2.prepend('parrot');

console.log('\nPrepend Tests:');
console.log(`Erster Knoten (head) Wert: ${list2.head.value} (Erwartet: "parrot")`);
console.log(`Zweiter Knoten Wert: ${list2.head.nextNode.value} (Erwartet: "cat")`);
console.log(`Dritter Knoten Wert: ${list2.head.nextNode.nextNode.value} (Erwartet: "dog")`);
console.log(`Nächster Knoten nach dog: ${list2.head.nextNode.nextNode.nextNode} (Erwartet: null)`);

//Test für size()
console.log('\nSize Tests:');
console.log(`Länge der ersten Liste: ${list.size()} (Erwartet: 3)`);
console.log(`Länge der zweiten Liste: ${list2.size()} (Erwartet: 3)`);

// Test für tail()
console.log('\nTail Tests:');
console.log(`Letzter Knoten Wert: ${list.tail().value} (Erwartet: "parrot")`);
console.log(`Letzter Knoten (nextNode) nach parrot: ${list.tail().nextNode} (Erwartet: null)`);

// Test für at(index)
console.log('\nAt Tests:');
console.log(`Knoten an Index 0: ${list.at(0).value} (Erwartet: "dog")`);
console.log(`Knoten an Index 1: ${list.at(1).value} (Erwartet: "cat")`);
console.log(`Knoten an Index 2: ${list.at(2).value} (Erwartet: "parrot")`);
console.log(`Knoten an Index 3: ${list.at(3)} (Erwartet: null)`);
console.log(`Knoten an Index -1: ${list.at(-1)} (Erwartet: null)`);
console.log(`Knoten an Index 5: ${list.at(5)} (Erwartet: null)`);

// Test für pop()
console.log('\nPop Tests:');

const list3 = new LinkedList();
list3.append('apple');
list3.append('banana');
list3.append('cherry');

// Teste das Entfernen des letzten Knotens
console.log(`Letzter Knoten vor Pop: ${list3.tail().value} (Erwartet: "cherry")`);
list3.pop();
console.log(`Letzter Knoten nach Pop: ${list3.tail().value} (Erwartet: "banana")`);

// Entferne den letzten Knoten und teste erneut
list3.pop();
console.log(`Letzter Knoten nach zweitem Pop: ${list3.tail().value} (Erwartet: "apple")`);

// Entferne den letzten Knoten und teste erneut
list3.pop();
console.log(`Liste nach drittem Pop, Head: ${list3.head} (Erwartet: null)`);

// Teste Pop auf einer leeren Liste
console.log(`Pop auf leerer Liste: ${list3.pop()} (Erwartet: null)`);

// Test für contains()
console.log('\nContains Tests:');

// Erstelle eine neue LinkedList und füge einige Knoten hinzu
const list4 = new LinkedList();
list4.append('apple');
list4.append('banana');
list4.append('cherry');

// Teste das Vorhandensein von Werten
console.log(`Liste enthält "banana": ${list4.contains('banana')} (Erwartet: true)`);
console.log(`Liste enthält "apple": ${list4.contains('apple')} (Erwartet: true)`);
console.log(`Liste enthält "cherry": ${list4.contains('cherry')} (Erwartet: true)`);
console.log(`Liste enthält "date": ${list4.contains('date')} (Erwartet: false)`);

// Teste auf einer leeren Liste
const emptyList = new LinkedList();
console.log(`Leere Liste enthält "anyValue": ${emptyList.contains('anyValue')} (Erwartet: false)`);

// Test für find()
console.log('\nFind Tests:');

// Erstelle eine neue LinkedList und füge einige Knoten hinzu
const list5 = new LinkedList();
list5.append('apple');
list5.append('banana');
list5.append('cherry');

// Teste die Suche nach Werten
console.log(`Index von "banana": ${list5.find('banana')} (Erwartet: 1)`);
console.log(`Index von "apple": ${list5.find('apple')} (Erwartet: 0)`);
console.log(`Index von "cherry": ${list5.find('cherry')} (Erwartet: 2)`);
console.log(`Index von "date": ${list5.find('date')} (Erwartet: null)`); // Nicht vorhanden

console.log('\ntoSting Tests');

// Test für toString() mit einer leeren Liste
const emptyList2 = new LinkedList();
console.log(`Leere Liste: "${emptyList2.toString()}" (Erwartet: null)`);

// Test für toString() mit einer Liste mit einem Element
const singleNodeList = new LinkedList();
singleNodeList.append('dog');
console.log(`Einzelne Knoten Liste: "${singleNodeList.toString()}" (Erwartet: "( dog ) -> null")`);

// Test für toString() mit mehreren Elementen
const multiNodeList = new LinkedList();
multiNodeList.append('cat');
multiNodeList.append('parrot');
multiNodeList.append('hamster');
console.log(
	`Mehrere Knoten Liste: "${multiNodeList.toString()}" (Erwartet: "( cat ) -> ( parrot ) -> ( hamster ) -> null")`
);

// Test für toString() mit prepend
const prependedList = new LinkedList();
prependedList.prepend('snake');
prependedList.prepend('turtle');
console.log(`Prepended Liste: "${prependedList.toString()}" (Erwartet: "( turtle ) -> ( snake ) -> null")`);

// Test für insertAt()
console.log('\nInsertAt Tests:');

const insertList = new LinkedList();
insertList.append('apple');
insertList.append('banana');
insertList.append('cherry');

// Teste das Einfügen am Anfang
insertList.insertAt('kiwi', 0);
console.log(`Knoten an Index 0 nach Einfügen: ${insertList.head.value} (Erwartet: "kiwi")`);
console.log(insertList.toString());

// Teste das Einfügen in der Mitte
insertList.insertAt('orange', 2);
console.log(`Knoten an Index 2 nach Einfügen: ${insertList.at(2).value} (Erwartet: "orange")`);
console.log(insertList.toString());

// Teste das Einfügen am Ende
insertList.insertAt('grape', 4); // Dies ist korrekt
console.log(`Letzter Knoten nach Einfügen: ${insertList.at(4).value} (Erwartet: "grape")`);
console.log(insertList.toString());

// Teste das Einfügen an einer ungültigen Position
console.log(`Versuch, an ungültiger Position einzufügen: ${insertList.insertAt('melon', 10)} (Erwartet: null)`);

console.log('\nRemoveAt Tests:');

const testList = new LinkedList();
testList.append('apple');
testList.append('banana');
testList.append('cherry');

// Teste das Entfernen des Kopfes
testList.removeAt(0);
console.log(`Kopf nach Entfernen: ${testList.head.value} (Erwartet: "banana")`);

// Teste das Entfernen eines Knotens in der Mitte
testList.removeAt(0); // Entferne "banana"
console.log(`Kopf nach Entfernen: ${testList.head.value} (Erwartet: "cherry")`);

// Teste das Entfernen des letzten Knotens
testList.removeAt(0); // Entferne "cherry"
console.log(`Kopf nach Entfernen: ${testList.head} (Erwartet: null)`);

// Teste das Entfernen an einer ungültigen Position
console.log(`Entfernen an ungültiger Position: ${testList.removeAt(10)} (Erwartet: null)`);

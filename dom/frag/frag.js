module.exports = function(item, doc){
	var document = doc || can.document || can.global.document;
	var frag;
	if(!item || typeof item === "string"){
		frag = can.buildFragment(item == null ? "" : ""+item, document);
		// If we have an empty frag...
		if (!frag.childNodes.length) {
			frag.appendChild(document.createTextNode(''));
		}
		return frag;
	} else if(item.nodeType === 11) {
		return item;
	} else if(typeof item.nodeType === "number") {
		frag = document.createDocumentFragment();
		frag.appendChild(item);
		return frag;
	} else if(typeof item.length === "number") {
		frag = document.createDocumentFragment();
		can.each(item, function(item){
			frag.appendChild( can.frag(item) );
		});
		if (!can.childNodes(frag).length) {
			frag.appendChild(document.createTextNode(''));
		}
		return frag;
	} else {
		frag = can.buildFragment( ""+item, document);
		// If we have an empty frag...
		if (!can.childNodes(frag).length) {
			frag.appendChild(document.createTextNode(''));
		}
		return frag;
	}
};

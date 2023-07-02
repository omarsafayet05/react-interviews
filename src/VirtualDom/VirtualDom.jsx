//Virtual Dom: The entire Ui is being kept to the memory and synced with real DOM.
//How it Works: let some state changed,the componenet will rerender again and again
//Every time some states changes.
//If state is changing,component getting rerendered and virtual DOM is updated as well.
//If VDOM is updated and compare with real DOM.
// new nodes(blue nodes) with updated new nodes(previus nodes & gray ) will compare to real DOM(only blue nodes). Need to change gray nodes to blue and append to real DOM ,The whole process is called reconciliation.

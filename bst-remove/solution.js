module.exports = function remove(bst, rVal) {
  _traverse(bst.root);
  function _traverse(node) {
    if (node.value === rVal) {
      if( node.right !== null) {
        let temp = node.right;
        while(temp.left !== null) {
          temp = temp.left;
        }
        node.value = temp.value;
        node = node.right;
        while (node.left !== null) {
          if(node.left.value === temp.value) {
            node.left = null;
          }
        }
      } else {node = node.left}
    }
    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  }
  return bst;
}

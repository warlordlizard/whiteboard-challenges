module.exports = function preOrderFind(bst, find) {
  var result
  _traverse(bst.root);
  function _traverse(node) {
    if( node.value === find) result=true;
    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right); 
  }
  if(result !== true) result = false;
  return result;
}

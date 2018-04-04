module.exports = function preOrder (bst) {
  var nodeArr = [];
  _traverse(bst.root);
  function _traverse(node) {
    nodeArr.push(node.value);
    if(node.left) _traverse(node.left);
    if(node.right) _traverse(node.right);
  }
  return nodeArr;
}
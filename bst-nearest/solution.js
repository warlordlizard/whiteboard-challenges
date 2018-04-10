module.exports = function nearest(bst, nearest) {
  var diff = Math.abs(nearest - bst.root.value)
  var resultNode = bst.root;
  _traverse(bst.root);
  function _traverse(node) {
    if (Math.abs(nearest-node.value)<diff) {
      diff = Math.abs(nearest-node.value)
      resultNode = node.value;
    }
    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  }
  
  return resultNode;
}
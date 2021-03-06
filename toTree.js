/*
 * @param {data} 需要转变的数据
 * @param {config} id、pid设置 需结合data中的对应字段
 */
export default function tree(data = [], config = {}) {
  const { id = "id", pid = "pid" } = config;
  // 存放最高层级数据
  const result = [];
  // 存放所有子集
  const childrenNode = [];
  // 获取全部id
  const ids = data.map((i) => i[id]);
  //是否为数组
  if (!Array.isArray(data)) {
    return result;
  }
  // 分离数据  最高级和所有子集
  data.forEach((i) => (ids.includes(i[pid]) ? childrenNode : result).push(i));
  // 浅拷贝一份数据去做操作
  const copyData = [...result];
  // 循环遍历
  while (childrenNode.length) {
    // 获取所有最高层的id
    const topIds = copyData.map((i) => i["id"]);
    // 在子集中找到属于最高层id的数据
    const node = childrenNode.find((i) => topIds.includes(i[pid]));
    // 找到父级
    const parentNode = copyData.find((i) => i[id] === node[pid]);
    // 删除找到的子节点
    childrenNode.splice(childrenNode.indexOf(node), 1);
    // 添加到父级的children中
    parentNode.children
      ? parentNode.children.push(node)
      : (parentNode.children = [node]);
    // 把子级放到拷贝的父级中（超过两个层级下，很重要，不写会结构错乱，
    copyData.push(node);
  }
  // 将结果推出
  return result;
}

/**
 * 上面写法太复杂，下面为简写
 *
 * @param {*} data 需要转变的数据
 * @param {*} config id、pid设置 需结合data中的对应字段
 * @returns tree
 */
function toTree(data = [], config = {}) {
  const { id = "id", pid = "pid" } = config;
  // 浅拷贝精髓所在
  const newData = JSON.parse(JSON.stringify(data));
  // 存放结果
  const result = [];
  // 存放平铺数据
  const allNodeMap = {};
  // 不是Array不处理
  if (!Array.isArray(newData)) {
    return result;
  }
  // 清除原有的children，以及平铺数据
  newData.forEach((item) => {
    delete item.children;
    allNodeMap[item[id]] = item;
  });
  // 核心代码
  newData.forEach((item) => {
    const parent = allNodeMap[item[pid]];
    parent.children ? parent.children.push(item) : (parent.children = [item]);
  });

  return result;
}

// 测试数据
const data = [
  {
    id: 1,
    pid: 0,
    text: "data_01",
  },
  {
    id: 2,
    pid: 1,
    text: "data_02",
  },
  {
    id: 3,
    pid: 1,
    text: "data_03",
  },
  {
    id: 4,
    pid: 3,
    text: "data_04",
  },
  {
    id: 5,
    pid: 6,
    text: "data_05",
  },
  {
    id: 6,
    pid: 2,
    text: "data_06",
  },
  {
    id: 7,
    pid: 6,
    text: "data_07",
  },
];
console.log(JSON.stringify(tree(data), null, 2));

import React, { useState, useCallback, useEffect } from "react";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import TodoItem from "./components/TodoItem";
import CheckModal from "./components/Modal/CheckModal";
import EditModal from "./components/Modal/EditModal";
import "./App.scss";

export default function App() {
  const [isInput, setInput] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [isShowCheckModal, setIsShowCheckModal] = useState(false);
  const [isShowEditModal, setIsShowEditMOdal] = useState(false);
  const [currentData, setCurrentData] = useState({});

  const changeInput = () => {
    setInput(!isInput);
  };

  /* useEffect处理副作用，比如ajax请求等。在hooks里面作用类似于componentDidMount()。
  他也要依赖某个数据的变化执行箭头函数
  useEffect执行是有顺序的！！
  */
  useEffect(() => {
    // 没有的时候返回一个空数组
    const todoData = JSON.parse(localStorage.getItem("todoData") || []);
    // 用todoData的值去替换todoList
    setTodoList(todoData);
  }, []);
  /** 存入local storage,每当todoList发生变化时 */
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
  }, [todoList]);

  /**
   * const functionName = useCallback(事件函数,[依赖])
   * 父组件的函数属性传给子组件的时候要用这个缓存下来
   * 依赖变化了执行一次事件函数
   *避免父组件更新的时候子组件跟着更新
   */
  const addItem = useCallback((item) => {
    console.log(item);
    const itemJSON = {
      id: new Date().getTime(),
      content: item,
      complete: false,
    };
    setTodoList((todoList) => [...todoList, itemJSON]);
    setInput(false);
    /**这里是依赖setTodoList中的todoList的变化而刷新的，所以不用写依赖了 */
  }, []);

  const openCheckModal = useCallback(
    (id) => {
      setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
      setIsShowCheckModal(true);
    },
    [todoList]
  );
  const openEditModal = useCallback(
    (id) => {
      setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
      setIsShowEditMOdal(true);
    },
    [todoList]
  );
  const submitEdit = useCallback((newData, id) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          item = newData;
        }
        return item;
      })
    );
    setIsShowEditMOdal(false);
  }, []);
  const completeItem = useCallback((id) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item;
      })
    );
  }, []);
  const removeItem = useCallback((id) => {
    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        closeModal={() => {
          setIsShowCheckModal(false);
        }}
        data={currentData}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        submitEdit={submitEdit}
      />
      <MyHeader openInput={changeInput} />
      <AddInput isInput={isInput} addItem={addItem} />
      <ul className="todo-list">
        {todoList.map((item, i) => {
          return (
            <TodoItem
              data={item}
              key={i}
              openCheckModal={openCheckModal}
              openEditModal={openEditModal}
              completeItem={completeItem}
              removeItem={removeItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

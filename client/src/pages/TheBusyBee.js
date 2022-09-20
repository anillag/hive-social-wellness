import React, { useState } from "react";
import Item from "../components/Item";

class TheBusyBee extends React.Component {
  state = {
    input: "",
    items: ["Meditate", "Finish one chapter", "Do some cardio"],
  };

  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  addItem(event) {
    this.setState((state) => ({
      items: state.items.concat(state.input),
    }));

    event.preventDefault();
  }

  removeItem() {
    let newList = this.state.items;
    newList.pop();

    this.setState((state) => ({
      items: newList,
    }));
  }

  render() {
    return (
      <div className="TheBusyBee hiveFlex">
        <h2 className="bg-yellow-400 text-white text-center max-w-2xl font-mono shadow-xl text-5xl font-medium m-auto mt-5 mb-5 p-5 border-orange-400 rounded-lg">
          My Busy Bee List:
        </h2>

        <List items={this.state.items} action={this.removeItem}></List>

        <div className="flex justify-center">
          <form onSubmit={this.addItem}>
            <div className="space-x-5">
              <input
                placeholder="Goal or Task"
                className="pl-2 p-2 border-2 border-yellow-500 rounded-lg w-64"
                type="text"
                value={this.state.input}
                onChange={this.handleInput}
              ></input>
              <button
                className="hover:bg-orange-50 hover:text-yellow-800 bg-orange-500 rounded-md text-white px-5 text-xl py-1"
                type="submit"
                name="action"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function List(props) {
  return (
    <div className="grid justify-items-center">
      {props.items.map((item, index) => {
        return <Item name={item} key={index} action={props.action}></Item>;
      })}
    </div>
  );
}

export default TheBusyBee;
// const TheBusyBee = () => {
//   const [goalField, setGoalField] = useState([
//     {
//       complete: false,
//       goal: "",
//     },
//   ]);
//   // let list = [];
//   const addNewGoal = () => {
//     setGoalField([
//       ...goalField,
//       {
//         complete: false,
//         goal: "",
//       },
//     ]);
//   };
//   const removeGoal = (index) => {
//     const list = [...goalField];
//     list.splice(index, 1);
//     setGoalField(list);
//   };
//   // once backend connects, change logic^ index will be id, set delete goal by id
//   // onBlur save, or save button

//   return (
//     <div className="hiveFlex">
//       <ThoughtForm />
//       <div className=" w-full p-5 flex justify-center">
//         <div className="w-1/2 flex-row justify-center">
//           <div className="w-full flex justify-end">
//             <button
//               className="buzz-button rounded-3xl"
//               type="button"
//               onClick={addNewGoal}
//             >
//               Add Goal!
//             </button>
//           </div>
//           <div className="w-full flex-row justify-center">
//             {goalField.map((goal, i) => (
//               <div key={i}>
//                 <input type="checkbox" defaultValue={goal.complete} />
//                 <input
//                   className="buzz-text m-5"
//                   type="text"
//                   placeholder="Enter A New Goal Here!"
//                   defaultValue={goal.goal}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removeGoal(i)}
//                   className=""
//                 >
//                   x
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

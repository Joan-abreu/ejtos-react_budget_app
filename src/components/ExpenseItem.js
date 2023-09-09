import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        console.log('selectedCurrency:', props.cur);
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    const iconStylePlus = {
        backgroundColor: 'green',
        borderRadius: 50
      }

    const iconStyleMinus = {
        backgroundColor: 'red',
        borderRadius: 50
      }


    return (
        <tr>
        <td>{props.name}</td>
        <td>${props.cost}</td>
        <td><TiPlus style={iconStylePlus} size='1.5em' onClick={event=> increaseAllocation(props.name)} color="white"></TiPlus></td>
        <td><TiMinus style={iconStyleMinus} size='1.5em' onClick={event=> decreaseAllocation(props.name)} color="white"></TiMinus></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

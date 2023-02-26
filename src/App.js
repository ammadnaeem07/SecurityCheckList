import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './Firebase';
import CheckListItem from './CheckListItem';
import localData from './checklist_data.json';
import './App.css';
import CheckListFilter from './CheckListFilter';
import CheckListProgress from './CheckListProgress';

const App = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let qString = params.get('isRegistered');
  const isRegistered = qString ? qString : false;
  // console.log(isRegistered);
  const [checkList, setCheckList] = useState([]);
  const dataForDisplay = isRegistered ? checkList : checkList.slice(0, 5);
  let progressVAl = 0;
  const fetchCheckList = async () => {
    try {
      await getDocs(collection(firestore, 'CheckListData')).then(
        (querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setCheckList(newData);
        }
      );
    } catch (err) {
      // const loadData = () => [...localData];
      console.log(err);
      console.log('From Local DB');
      setCheckList(localData);
    }
  };

  useEffect(() => {
    fetchCheckList();
    // if (checkList) {
    //   console.log(checkList);
    // }
  }, [checkList]);
  return (
    <>
      <CheckListFilter />
      <br />
      <CheckListProgress pVal={progressVAl} />
      <CheckListItem ListItems={dataForDisplay} isAuth={isRegistered} />
    </>
  );
};

export default App;

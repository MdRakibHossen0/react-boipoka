import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from '../../utility/addTODB';

const ReadList = () => {
    const data=useLoaderData()
    console.log(data)

    useEffect(()=>{
        const storedBookData = getStoredBook();
        const ConvertedStoredBookData = storedBookData.map(id=>parseInt(id))
        const myReadList = data.filter((book) => ConvertedStoredBookData.includes(book.Id));
        console.log(myReadList);
        // console.log(ConvertedStoredBookData)
        // console.log(storedBookData);
    },[])
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Book List</Tab>
            <Tab>My Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2>Book i read</h2>
          </TabPanel>
          <TabPanel>
            <h2>My Wish List</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ReadList;
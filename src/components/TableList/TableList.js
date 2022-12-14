import "./TableList.css";
import {useState, useEffect} from "react";
import Table from "./Table/Table.js";

const TableList = ({ coursesToOpen, filteredcourses }) => {

    return(
        <div>
            <Table/>
        </div>

    );
};

export default TableList;
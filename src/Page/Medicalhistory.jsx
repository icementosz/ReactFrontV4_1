import React, { useState, useEffect } from 'react';
import { useSidebar } from '../Component/sidebarcontext';
import './medicalhistory.css';

function Medicalhistory() {
    const { isSidebarOpen } = useSidebar();
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;


    useEffect(() => {
        // document.body.style.overflow = 'hidden';
        // document.documentElement.style.overflowY = 'hidden';
        // document.body.style.overflow = 'auto';
        document.documentElement.style.overflowY = 'auto';
        document.documentElement.style.overflowX = 'auto';
        document.body.style.overflowX = 'auto';
    }, []);

    return (
        <>
            <div className={mainClass}>

                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Medical History</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li><i className="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Medical History</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="ContainnerMedHis">

                    <div className="MedHisMenu">
                        <div className="searchboxarea">
                            <div className="searchbox">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input className="search-input" type="search" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="HistoryList">
                            <div className="boxlist">
                                <div className="text">
                                    7/1/2024 
                                </div>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="boxlist">
                                <div className="text">
                                    8/1/2024 
                                </div>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="boxlist">
                                <div className="text">
                                    9/1/2024 
                                </div>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="boxlist">
                                <div className="text">
                                    10/1/2024 
                                </div>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="MedHisDetail">
                        
                    </div>
                </div>

            </div>

        </>
    )
}

export default Medicalhistory
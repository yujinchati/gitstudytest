import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import style from '../assets/css/style.module.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className={style.navComm}>
                    <h1 className={style.tit_logo}><a href="#none" className="img_logo">우주웹</a></h1>
                    <ul className="list_gnb">
                        <li><a href="#none" className="link_gnb">서비스탐색</a></li>
                        <li><a href="#none" className="link_gnb">인기서비스</a></li>
                        <li><a href="#none" className="link_gnb">공유하기</a></li>
                        <li><a href="#none" className="link_gnb">내 서비스 보기</a></li>
                    </ul>
                    <div className="area_user">
                        <a href="#none" className="link_user">로그인</a>
                        <span className="txt_bar">/</span>
                        <a href="#none" className="link_user">가입하기</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
import React from "react";
import cls from './layout.module.scss';
import List from "../components/list/list";
import Header from "../components/header/header";
import Pagination from "../components/pagination/pagination";
import {useStore} from "effector-react";
import {$loaded} from "../store/store";

function Layout() {
	const loadedFlag = useStore($loaded);
	if ( loadedFlag ) {
		return (
			<div className={cls['layout']}>
				<Header/>
				<main className={cls['main']}>
					<h2>Все игры</h2>
					<Pagination/>
					<List/>
					<Pagination/>
				</main>
			</div>
		);
	}
	else {
		return <div className={cls['loader']}>Loading...</div>
	}
}

export default Layout
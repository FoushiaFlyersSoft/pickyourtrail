import React from 'react';
import { Layout, Menu } from 'antd';



import { HomeRoutes } from 'src/routes';
import NavbarHeader from './../../../components/shared/navbar/NavbarHeader';

const { Header, Content, Footer, Sider } = Layout;



const MainLayoutPresentational = () => {
	return (
		<Layout style={{ height: '100%' }}>
		
			<Layout>
				<Header  style={{ padding: 0 ,width:'100%'}}><NavbarHeader></NavbarHeader></Header> 
				<Content >
					<div >
						<HomeRoutes />
					</div>
				</Content>
				
			</Layout>
		</Layout>
	);
};

export default MainLayoutPresentational;

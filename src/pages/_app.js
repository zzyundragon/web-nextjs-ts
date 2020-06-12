import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import Config from '../../utils/config'
import '../styles/base.styl'

const s_header = {
    boxShadow: '0 2px 2px #ccc',
    height: '85px'
}
const s_menus = {
    height: '100%'
}
const s_button = {
    width: 'auto',
    height: '30px',
    borderRadius: '4px',
    border: '1px solid #148bff',
    textAlign: 'center',
    lineHeight: '32px',
    color: '#148bff',
    background: 'rgba(0,0,0,0)',
    padding: '0 20px'
}

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    constructor(props) {
        super(props)
        this.state = {
            menus: [
                { name: '首页', path: '/', selected: true },
                { name: '赛事', path: '/race', selected: false },
                { name: '证书', path: '/certificate', selected: false },
                { name: '关于我们', path: '/aboutus', selected: false }
            ]
        }
    }

    componentDidMount() {
        let currentPath = Router.router.route || '/'
        let index = this.state.menus.findIndex(v => v.path === currentPath)
        this.routerChange(index)
    }

    routerChange(index) {
        let menus = []
        this.state.menus.forEach(v => {
            v.selected = false
            menus.push(v)
        })
        if (index > -1) {
            menus[index].selected = true
            Router.push(menus[index].path)
        }
        this.setState({
            menus: menus
        })
    }

    loginFunc() {
        window.open(Config.loginAddress)
    }

    signUpFunc() {
        Router.push('/signup')
    }

    render() {
        const { Component, pageProps } = this.props
        const { menus } = this.state
        return (
            <>
                <Head>
                    <title>ICode国际青少年编程竞赛</title>
                </Head>
                <div style={s_header}>
                    <div className='wd-per-100 hgh-per-100 flex items-center flex-between pl-30 pr-30'>
                        <div className='flex items-center' style={s_menus}>
                            <img src="/static/images/icode.png" className='mr-20' alt="" />
                            {
                                menus.map((v, k) => <div className={v.selected ? `ml-50 pointer selected` : 'ml-50 pointer'} key={k} onClick={this.routerChange.bind(this, k)}>{v.name}</div>)
                            }
                        </div>
                        <div className='entrys'>
                            <button className='pointer mr-20' style={s_button} onClick={this.loginFunc.bind(this)}>登录</button>
                            <button className='pointer' style={s_button} onClick={this.signUpFunc.bind(this)}>学校/机构报名</button>
                            <style jsx>
                                {`
                                    button:hover {
                                        background: #148bff!important;
                                        color: white!important;
                                    }
                                `}
                            </style>
                        </div>
                    </div>
                </div>
                <Component {...pageProps} />
            </>
        )
    }
}
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Nav from '../components/Nav';
import './index.css';

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 100px 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mackenzie Miller | Fullstack Web Developer"
      meta={[
        { name: 'description', content: 'Portfolio and blog for fullstack web developer located in Chicago Illinois' },
        { name: 'og:type', content: 'website'},
        { name: 'og:site_name', content: 'Mackenzie Miller | Fullstack Web Developer'},
        { name: 'twitter:site', content: '@mackmmiller' },
        { name: 'keywords', content: 'web developer, frontend, backend, evanston' },
      ]}
    >
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
        integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
        crossorigin="anonymous"
      />
      <script>
        window['_fs_debug'] = false;
        window['_fs_host'] = 'fullstory.com';
        window['_fs_org'] = 'BFV6J';
        window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) {m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); } return;}
    g=m[e]=function(a,b){g.q ? g.q.push([a, b]) : g._api(a, b); };g.q=[];
        o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
        y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v){g(l, { uid: i }); if(v)g(l,v)};g.setUserVars=function(v){g(l, v)};
    y="rec";g.shutdown=function(i,v){g(y, !1)};g.restart=function(i,v){g(y, !0)};
    y="consent";g[y]=function(a){g(y, !arguments.length || a)};
    g.identifyAccount=function(i,v){o = 'account'; v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    })(window,document,window['_fs_namespace'],'script','user');
</script>
    </Helmet>
    <Header />
    <Content>{children()}</Content>
    <Nav />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

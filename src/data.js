import portfolio_img from './assets/portfolio_img.png';
import tank_img from './assets/tank_img.png';
import retail_img from './assets/retail_img.png';

import c from './assets/skillbubbles/c.png';
import cpp from './assets/skillbubbles/cpp.png';
import java from './assets/skillbubbles/java.png';
import python from './assets/skillbubbles/python.png';
import html from './assets/skillbubbles/html.png';
import css from './assets/skillbubbles/css.png';
import js from './assets/skillbubbles/js.png';
import mongodb from './assets/skillbubbles/mongodb.png';
import express from './assets/skillbubbles/express.png';
import react from './assets/skillbubbles/react.png';
import node from './assets/skillbubbles/node.png';
import mysql from './assets/skillbubbles/mysql.png';
import threejs from './assets/skillbubbles/threejs.png';
import figma from './assets/skillbubbles/figma.png';
import blender from './assets/skillbubbles/blender.png';
import adobe from './assets/skillbubbles/adobe.png';
import git from './assets/skillbubbles/git.png';
import github from "./assets/github_icon.svg";

const navlinks = ["Home", "About", "Projects", "Skills", "Contact"];

const reactpath = "m11,5.56c6.08,0,11,1.88,11,4.2s-4.92,4.2-11,4.2S0,12.08,0,9.76s4.92-4.2,11-4.2Zm3.64,2.1c3.04,5.26,3.87,10.47,1.86,11.63s-6.1-2.17-9.14-7.43S3.49,1.39,5.5.23s6.1,2.17,9.14,7.43Zm0,4.2c-3.04,5.26-7.13,8.59-9.14,7.43s-1.17-6.37,1.86-11.63S14.49-.93,16.5.23s1.17,6.37-1.86,11.63Z";
const nodepath = "m7.9.12c.27-.16.62-.16.9,0l7.45,4.3c.28.16.45.46.45.78v8.6c0,.32-.17.62-.45.78l-7.45,4.3c-.28.16-.62.16-.9,0L.46,14.57c-.28-.16-.46-.46-.46-.78V5.2c0-.32.16-.62.45-.78L7.9.12Z";
const jspath = "m8.01,18.05c-.24,0-.48-.06-.69-.19l-2.21-1.31c-.33-.18-.17-.25-.06-.29.44-.15.53-.19,1-.46.05-.03.11-.02.16.01l1.7,1.01c.06.03.15.03.2,0l6.61-3.82c.06-.03.1-.11.1-.18v-7.63c0-.08-.04-.14-.1-.18l-6.61-3.81c-.06-.04-.14-.04-.2,0L1.3,5.02c-.06.04-.1.11-.1.18v7.63c0,.07.04.14.1.18l1.81,1.05c.98.49,1.58-.09,1.58-.67v-7.53c0-.11.08-.19.19-.19h.84c.1,0,.19.08.19.19v7.54c0,1.31-.72,2.06-1.96,2.06-.38,0-.68,0-1.52-.41l-1.74-1c-.43-.25-.69-.71-.69-1.21v-7.63c0-.5.26-.96.69-1.21L7.31.18c.42-.24.98-.24,1.39,0l6.61,3.82c.43.25.69.71.69,1.21v7.63c0,.5-.27.96-.69,1.21l-6.61,3.82c-.21.12-.45.19-.7.19m2.04-5.26c-2.89,0-3.5-1.33-3.5-2.44,0-.11.09-.19.19-.19h.85c.09,0,.17.07.19.16.13.87.51,1.31,2.26,1.31,1.39,0,1.99-.31,1.99-1.05,0-.43-.17-.74-2.33-.95-1.81-.18-2.93-.58-2.93-2.03,0-1.33,1.13-2.13,3.01-2.13,2.12,0,3.17.74,3.3,2.31,0,.05-.01.11-.05.15-.04.04-.09.06-.14.06h-.86c-.09,0-.17-.06-.19-.15-.21-.92-.71-1.21-2.07-1.21-1.52,0-1.7.53-1.7.93,0,.48.21.62,2.26.89,2.03.27,3,.65,3,2.08s-1.2,2.27-3.3,2.27"
const mongopath = "m6.97,6.29C6.14,2.62,4.4,1.64,3.96.95c-.18-.3-.34-.62-.48-.95-.02.33-.07.53-.34.78C2.57,1.28.21,3.2,0,7.38c-.19,3.89,2.86,6.29,3.26,6.54.31.15.69,0,.87-.14,1.47-1.01,3.48-3.69,2.83-7.49m-3.37,5.55c-.08.96-.13,1.52-.33,2.07,0,0,.13.92.22,1.89h.32c.08-.68.19-1.36.35-2.03-.41-.2-.54-1.08-.56-1.93Z"
const mysqlpath = "m13.95,11.43c-.82-.02-1.46.06-2,.29-.15.06-.4.06-.42.26.08.08.09.21.16.33.12.2.34.48.54.62l.66.47c.4.25.85.39,1.25.63.23.14.45.33.68.48.12.08.19.22.33.27v-.03c-.07-.09-.09-.22-.16-.33l-.31-.3c-.3-.4-.67-.75-1.07-1.03-.33-.23-1.05-.53-1.18-.91l-.02-.02c.23-.02.49-.1.71-.16.35-.09.67-.07,1.03-.16l.49-.14v-.09c-.19-.18-.32-.43-.51-.6-.53-.45-1.1-.89-1.7-1.26-.32-.2-.73-.34-1.07-.51-.12-.06-.33-.09-.4-.19-.19-.22-.29-.52-.42-.79l-.84-1.78c-.19-.4-.3-.8-.53-1.17-1.06-1.74-2.21-2.79-3.99-3.83-.38-.21-.83-.31-1.32-.42l-.77-.04c-.17-.07-.33-.27-.47-.36C2.01.27.5-.53.07.52c-.28.67.41,1.32.65,1.66.18.24.4.5.53.77.07.17.09.36.16.54.16.45.32.95.54,1.37.12.21.24.44.38.63.08.11.23.16.26.35-.14.2-.15.51-.24.77-.37,1.16-.23,2.59.3,3.44.17.26.55.82,1.08.6.46-.18.36-.77.49-1.28.03-.12.01-.2.07-.29v.02l.42.85c.32.5.88,1.02,1.34,1.37.25.18.44.5.75.61v-.03h-.02c-.06-.09-.15-.13-.24-.2-.19-.18-.39-.41-.54-.61-.43-.57-.81-1.21-1.15-1.86-.17-.32-.31-.67-.44-.98-.06-.12-.06-.31-.17-.37-.15.22-.38.42-.49.7-.2.44-.22.98-.29,1.55-.04.01-.02,0-.04.02-.33-.08-.44-.42-.57-.71-.31-.73-.36-1.89-.09-2.73.07-.21.38-.89.26-1.1-.06-.19-.27-.31-.38-.46-.13-.19-.28-.44-.37-.65-.25-.57-.37-1.21-.64-1.78-.12-.27-.34-.54-.52-.79-.2-.28-.41-.47-.57-.8-.05-.11-.12-.3-.04-.42.02-.08.06-.11.14-.13.13-.11.52.03.65.09.38.15.7.3,1.02.51.14.1.3.3.48.35h.22c.33.07.7.02,1.01.11.55.17,1.04.43,1.48.71,1.35.85,2.46,2.06,3.21,3.5.12.24.17.45.29.7.22.5.48,1.01.7,1.5.22.48.42.97.73,1.37.15.21.77.33,1.05.44.21.09.53.17.71.29.35.21.7.46,1.03.7.16.12.68.38.71.58h0ZM3.44,2.53c-.14,0-.28.02-.42.05v.02h.02c.08.16.23.28.33.42l.24.49.02-.02c.14-.1.22-.27.22-.51-.06-.07-.07-.14-.12-.21-.06-.1-.2-.15-.28-.24h0Z"
const svgpaths = [reactpath, nodepath, jspath, mongopath, mysqlpath, reactpath];
const svgcolors = ["#61DAFB", "#689F63", "#F7DF1E", "#12924F", "#00678C", "#61DAFB"];

const portfolio = {
    title: "Portfolio",
    description: "Portfolio website created using React.js, Bootstrap and Three.js",
    link: "https://github.com/aryanGupta-09/React_Portfolio",
    image: portfolio_img
}
const tankstars = {
    title: "TankFight",
    description: "A tank fighting game created using Java, LibGDX and Box2D",
    link: "https://github.com/aryanGupta-09/TankStarsGame",
    image: tank_img
}
const nexusmart = {
    title: "NexusMart",
    description: "An online retail store created using HTML, CSS, JavaScript, MySQL, SCSS, Bootstrap",
    link: "https://github.com/aryanGupta-09/DBMS_OnlineRetailStore",
    image: retail_img
}
const projects = [portfolio, tankstars, nexusmart];

const skillbubbles = [c, cpp, java, python, html, css, js, mongodb, express, react, node, mysql, threejs, figma, blender, adobe, git, github];

export {navlinks, svgpaths, svgcolors, projects, skillbubbles};
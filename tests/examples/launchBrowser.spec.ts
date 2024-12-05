import {chromium} from "playwright";
import { test, expect } from '@playwright/test';

test.describe("Launch Browser suite", ()=>{

    test("launch chromium browser", async()=>{
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        page.goto("https://www.google.com");
    });



})

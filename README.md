# Chat Translator Automation - Singlish to Sinhala Testing

## Assignment Information
- **Course:** IT3040 – ITPM (IT Project Management)
- **Assignment:** Option 1 - Transliteration Accuracy Testing
- **Student Registration Number:IT23217768


## Project Overview
This project automates testing of the Chat Sinhala transliteration function at https://www.pixelssuite.com/chat-translator. The automation script reads test cases from an Excel file, types each Singlish input into the website, captures the actual Sinhala output, compares it with the expected output, and records Pass/Fail results back to the Excel file.

## Test Cases Summary
This test suite contains 50 test cases covering all 24 Singlish input types from Appendix 1 of the assignment document.

| Category | Number of Test Cases |
|----------|---------------------|
| Question forms | 2 |
| Command forms | 2 |
| Greetings | 2 |
| Requests | 2 |
| Responses | 2 |
| Repeated words | 2 |
| Inputs with Punctuation Marks | 3 |
| Romanization / Spelling Variants | 2 |
| Isolated English Word Insertions | 2 |
| Multi-Word English Phrases | 2 |
| English Digital Terms | 2 |
| Platform / App Names | 2 |
| English Abbreviations / Acronyms | 2 |
| English Clipped Forms | 2 |
| Place Names Embedded | 2 |
| Person Names Embedded | 2 |
| Inputs with Numbers and Numeric Suffixes | 2 |
| Inputs with Currency | 2 |
| Inputs with Time Formats | 2 |
| Inputs with Unit of Measurements | 2 |
| Inputs with Slang and Casual Phrasing | 2 |
| Online Identifiers in Singlish | 2 |
| Inputs Containing Emojis | 2 |
| Additional categories (mixed punctuation and question) | 2 |
| **TOTAL** | **50** |

All test cases are designed to identify transliteration failures where the website produces incorrect or unexpected output.

## Prerequisites
1. Install Python 3.11 or 3.12 from https://www.python.org/downloads/ - during installation, check the box "Add Python to PATH"
2. Install Google Chrome from https://www.google.com/chrome/

## Installation Steps
1. Extract the project folder to D:\test_automation
2. Open Command Prompt and navigate to the project directory: cd /d D:\test_automation
3. Install Python dependencies by running these commands one by one:
   - pip install -U pip
   - pip install playwright openpyxl
   - playwright install

## Project Files
- test_automation.py - Main Playwright automation script
- Assignment 1 - Test cases.xlsx - Excel file with 50 test cases
- README.md - This documentation file
- Text file- Github repository link

## How to Run the Tests
From the project directory (D:\test_automation), run the following command:

python test_automation.py --excel "Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open

### Command Line Arguments
- --excel: Path to the Excel file containing test cases
- --url: Website URL to test
- --wait-ms: Wait time in milliseconds after each action (5000)
- --type-delay-ms: Delay between keystrokes in milliseconds (80)
- --slow-mo-ms: Slow down Playwright operations for visibility (200)
- --save-every: Save Excel results after every N test cases (1)
- --keep-open: Keep browser window open after tests finish

## Excel File Structure
The Excel file must contain the following 8 columns:


| A | TC ID | Test case identifier 
| B | Input length type 
| C | Input | Singlish text to translate 
| D | Expected output | Correct Sinhala translation 
| E | Actual output | Website's actual output 
| F | Status | Pass or Fail
| G | Singlish input types covered | Category from Appendix 1
| H | Evidence or rationale | Explanation for the input type

## What Happens When You Run the Script
1. The script loads the Excel file and reads all test cases
2. Chrome browser opens and navigates to the chat translator website
3. For each test case from row 2 to row 51, the script:
   - Types the Singlish input into the text field
   - Waits for the translation to appear
   - Reads the actual Sinhala output
   - Compares it with the expected output
   - Writes the actual output to column E
   - Writes "Pass" or "Fail" to column F
4. Results are saved to the Excel file
5. Browser remains open if --keep-open was specified

## Expected Results
All 50 test cases should show "Fail" in the Status column because they are specifically designed to identify system weaknesses in the transliteration function.

## Troubleshooting
- **"python is not recognized":** Reinstall Python and ensure "Add Python to PATH" is checked during installation
- **"ModuleNotFoundError: No module named 'playwright'":** Run the installation commands again: pip install playwright openpyxl and playwright install
- **Script cannot find Excel columns:** Verify that column headers in your Excel file exactly match the names listed in the Excel File Structure section above
- **Browser does not open:** Ensure Google Chrome is installed on your system

## Script Execution Flow
1. Load Excel file
2. Launch browser and navigate to URL
3. For each test case from row 2 to row 51:
   - Read TC ID, Input, Expected output
   - Type Input into website text field
   - Wait for translation
   - Read Actual output from website
   - Compare Actual vs Expected
   - Write Actual output to column E
   - Write "Pass" or "Fail" to column F
   - Save Excel after every N test cases
4. Save final Excel file
5. Wait for user input if --keep-open flag is used
6. Close browser

## Assignment Submission Requirements
1. Git Repository: This repository with all scripts and this README file. The repository must be publicly accessible
2. Excel File: "Assignment 1 - Test cases.xlsx" renamed with your registration number
3. Folder Structure: All files inside a folder named with your registration number, then zipped for upload

## Plagiarism Notice
This submission is original work. All test cases have been independently created without copying from Appendix 1 or Appendix 2 examples. The Excel file will be checked for plagiarism as per assignment guidelines.

## Submission Instructions
1. Rename all files with your registration number
2. Create a folder with your registration number
3. Paste all required files into the folder
4. Zip the folder
5. Upload the zipped folder to the 'Assignment 1 Answer: Option 1' link on CourseWeb before 5th May

## Quick Reference Commands
- Install dependencies: pip install playwright openpyxl && playwright install
- Run tests: python test_automation.py --excel "Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open


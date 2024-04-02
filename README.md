# Section 1 Resources

Before looking at this repo, please read all of the README, especially the `Setup` and `How to Use` sections.

---

## Welcome to Section 1

Welcome to App Academy!

Here you will find all resources that are associated to your cohort during your time in Section 1!

---

## Contents

* Setup
* How to Use


---

## Setup
To clone this repo, `cd` into the directory of your choice and run:
```bash
git clone <remote-repo-url>
```

We recommend you create an `appacademy` folder in your root directory and cloning the repo into that directory like this:
```bash
mkdir appacademy
cd appacademy
```
Then run the command to clone the repo.

If you are using a Personal Access Token (PAT) the exact command will be:
```bash
git clone https://github.com/brandonlaursen/april-1-24-section-1-resources.git
```

If you are using SSH to clone, the command will be:
```bash
git clone git@github.com:brandonlaursen/april-1-24-section-1-resources.git
```

---

## How to Use
First, complete the `Setup` section if not already done.

This repo is set up to contain each days lecture material. The `README.md` file included for each day contains the topics, with some notes, and the schedule for the day. The `notes.js` file is to be used to follow along in lecture every day and code along with the lecturer while taking notes. The `lecture.js` file is going to be used by the person lecturing and not to be filled out by anybody else. Once the lecture is finished, the following command should be run to get the contents of the `lecture.js` file:
```bash
git pull
```
Make sure that you are in the root directory of the `section-1-resources` repo so that you receive the most up to date version of the directory.
# april-1-24-section-1-resources

## Notes
You will not be able to push to this repo, if you want to take notes in this repo I would clone down this repo twice and remove the .git
- you can do so by cd into the repo after cloning and running rm -rf .git
* be very careful using rm -rf! It could delete everything in your current directory

### Another option would be to to put notes.js in the .gitignore; anytime you take notes it would be done so in a notes.js. This will be ignore by git

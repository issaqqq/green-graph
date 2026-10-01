import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";

const dates = [
    "2026-08-01",
    
];

const git = simpleGit();

const markCommit = async (date) => {
    const commitDate = moment(date).format();

    const data = {
        date: commitDate,
    };

    await jsonfile.writeFile(path, data);

    await git.add([path]);

    await git.commit(`Commit for ${date}`, {
        "--date": commitDate,
    });

    console.log(`✅ Commit created: ${date}`);
};

const run = async () => {
    for (const date of dates) {
        await markCommit(date);
    }

    await git.push();

    console.log("🚀 All commits pushed successfully!");
};

run();
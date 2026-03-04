import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";


const path = "./data.json";

const markCommit = (x, y) => {
    const date = moment()
    .subtract(0, "y")
    .subtract(4, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

    const data = {
        date: date,
    };

    jsonfile.writeFile(path, data, () => {
      simpleGit().add([path]).commit(date, {'--date': date}).push();
    });
};


markCommit(-2, 0);






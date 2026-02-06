class parentGame {

    rand(min, max = null) {
        if (max === null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min));
    }

}

export default parentGame

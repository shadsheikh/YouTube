export const API_KEY = "AIzaSyB1wQ8JSjS-54qG9L0sIE9RXx13Hhm0PPY"//import.meta.env.VITE_API_KEY;

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    }

    else {
        return value
    }
}
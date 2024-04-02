

class Utils {

    public referenceGenerator = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}

export const utils = new Utils();
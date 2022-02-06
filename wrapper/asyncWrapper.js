/**
 * @description     Wrappes up a controller with a try catch block and returns the wrapped controller. This
 * one allows us to write only the logic for each controller and not everytime write the same write catch
 * block.
 */
const asyncWrapper = (controller) => {
    return async (req, res) => {
        try {
            await controller(req, res)
        } catch (err) {
            console.log(err);
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({"success": false, "msg": "Something went wrong!"}));
        }
    }
}

module.exports = asyncWrapper;
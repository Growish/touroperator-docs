/**
 * @api {post} /list Create a new Gift/Wedding list
 * @apiName NewList
 * @apiGroup List
 * @apiVersion 0.0.1
 * @apiError (Error 400) ValidationError At least one field did not pass the validation.
 *
 *
 * @apiErrorExample {json} 400 Error Example:
 *      {
 *          "result": "KO",
 *          "code": 400,
 *          "message": "\"ownerFirstName\" must only contain alpha-numeric characters"
 *      }
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     {
 *          "result": "OK",
 *          "code": 200
 *     }
 *
 *
 * @apiParam (Identification) {Number} piva Tax number of the agency who owns the wedding list
 *
 *
 * @apiParam (Owner Data) {String{2..30}} [ownerFirstName] Owner First name
 * @apiParam (Owner Data) {String{2..30}} [ownerLastName] Owner Last name
 * @apiParam (Owner Data) {String}        [ownerBirthday] Birth date in format DD/MM/YYYY
 * @apiParam (Owner Data) {String}        [ownerTaxCoe] Owner's tax code in Codice fiscale format.
 * @apiParam (Owner Data) {String{2..30}} [ownerOccupation] Owner's occupation
 * @apiParam (Owner Data) {Email}         [ownerEmail] Owner's email
 *
 *
 * @apiParam (Travel Data) {String{2..300}} [travelTitle] Title of the travel
 * @apiParam (Travel Data) {String{2..10000}} [travelDescription] Description of the travel
 * @apiParam (Travel Data) {String[]} [travelPictures] Url of an image (can be repeated 5 times)
 *
 * @apiParam (Travel Stage) {Object[]} [travelStages] Stages of the travel
 * @apiParam (Travel Stage) {String{2..300}} [travelStages.title] Title of the stage
 * @apiParam (Travel Stage) {Number} [travelStages.amount] Cost in eurocents of the stage
 * @apiParam (Travel Stage) {Number} [travelStages.quoteNumber] Amount of quotes available
 *
 *
 */
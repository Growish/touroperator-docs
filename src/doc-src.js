/**
 * @api {post} /listPromise RPC, Create a new Gift/Wedding list promise
 * @apiName NewListPromise
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
 * @apiParam (Identification) {String{1..30}} [reference] The reference number/code used by the owner to identify the procedure
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
 * @apiParam (List Data) {String}         [type] Type of the list, wedding or gift
 *
 *
 * @apiParam (Travel Data) {String{2..300}} [travelTitle] Title of the travel
 * @apiParam (Travel Data) {String{2..10000}} [travelDescription] Description of the travel
 * @apiParam (Travel Data) {String[]} [travelPictures] Url of an image (can be repeated 5 times)
 *
 * @apiParam (Travel Steps) {Object[]} [travelSteps] Step of the travel
 * @apiParam (Travel Steps) {String{2..300}} [travelSteps.title] Title of the step
 * @apiParam (Travel Steps) {Number} [travelSteps.amount] Cost in eurocents of the step
 * @apiParam (Travel Steps) {Number} [travelSteps.quoteNumber] Amount of quotes available
 *
 *
 */


/**
 * @api {post} /list/wedding Create a new Wedding list
 * @apiName NewWeddingList
 * @apiGroup List
 * @apiVersion 0.0.1
 * @apiError (Error 400) ValidationError At least one field did not pass the validation.
 *
 *
 * @apiErrorExample {json} 400 Error Example:
 *      {
 *          "result": "KO",
 *          "code": 400,
 *          "message": "\"firstNameOne\" must only contain alpha-numeric characters"
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
 * @apiParam (Identification) {String{1..30}} [reference] The reference number/code used by the owner to identify the procedure
 *
 * @apiParam (List Data) {String{2..30}} firstNameOne First name of one of the spouse 1
 * @apiParam (List Data) {String{2..30}} lastNameOne Last name of one of the spouse 1
 * @apiParam (List Data) {String{2..30}} lastNameTwo Last name of one of the spouse 2
 * @apiParam (List Data) {String{2..30}} lastNameTwo Last name of one of the spouse 2
 * @apiParam (List Data) {String}        eventDate Event date in format DD/MM/YYYY
 * @apiParam (List Data) {String}        eventProvince Province of the event, in ISTAT format (http://www2.cciaa.cremona.it/studi/codici/province.html)
 * @apiParam (List Data) {String{6..30}} cellphone Cellphone of one of the spouses
 *
 *
 * @apiParam (Owner Data) {String{2..30}} ownerFirstName Owner First name
 * @apiParam (Owner Data) {String{2..30}} ownerLastName Owner Last name
 * @apiParam (Owner Data) {String}        ownerBirthday Birth date in format DD/MM/YYYY
 * @apiParam (Owner Data) {String}        ownerTaxCoe Owner's tax code in Codice fiscale format.
 * @apiParam (Owner Data) {String{2..30}} ownerOccupation Owner's occupation
 * @apiParam (Owner Data) {Email}         ownerEmail Owner's email
 *
 *
 * @apiParam (Travel Data) {String{2..300}} travelTitle Title of the travel
 * @apiParam (Travel Data) {String{2..10000}} travelDescription Description of the travel
 * @apiParam (Travel Data) {String[]} [travelPictures] Url of an image (can be repeated 5 times)
 *
 * @apiParam (Travel Step) {Object[]} [travelSteps] Steps of the travel
 * @apiParam (Travel Step) {String{2..300}} [travelSteps.title] Title of the steps
 * @apiParam (Travel Step) {Number} [travelSteps.amount] Cost in eurocents of the step
 * @apiParam (Travel Step) {Number} [travelSteps.quoteNumber] Amount of quotes available
 *
 *
 */

/**
 * @api {post} /list/gift Create a new Gift list
 * @apiName NewWGiftList
 * @apiGroup List
 * @apiVersion 0.0.1
 * @apiError (Error 400) ValidationError At least one field did not pass the validation.
 *
 *
 * @apiErrorExample {json} 400 Error Example:
 *      {
 *          "result": "KO",
 *          "code": 400,
 *          "message": "\"eventCategory\" must be one of [compleanno, anniversario, laurea, diploma, vacanze, pensione, festa, altro]"
 *      }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     {
 *          "result": "OK",
 *          "code": 200
 *     }
 *
 *
 * @apiParam (Identification) {Number} piva Tax number of the agency who owns the gift list
 * @apiParam (Identification) {String{1..30}} [reference] The reference number/code used by the owner to identify the procedure
 *

 * @apiParam (List Data) {String='compleanno', 'anniversario', 'laurea', 'diploma', 'vacanze', 'pensione', 'festa', 'altro'}        eventCategory Event category
 * @apiParam (List Data) {String}        eventDate Event date in format DD/MM/YYYY
 * @apiParam (List Data) {String{6..30}} cellphone Cellphone of the owner of the list
 *
 *
 * @apiParam (Owner Data) {String{2..30}} ownerFirstName Owner First name
 * @apiParam (Owner Data) {String{2..30}} ownerLastName Owner Last name
 * @apiParam (Owner Data) {String}        ownerBirthday Birth date in format DD/MM/YYYY
 * @apiParam (Owner Data) {String}        ownerTaxCoe Owner's tax code in Codice fiscale format.
 * @apiParam (Owner Data) {String{2..30}} ownerOccupation Owner's occupation
 * @apiParam (Owner Data) {Email}         ownerEmail Owner's email
 *
 *
 * @apiParam (Travel Data) {String{2..300}} travelTitle Title of the travel
 * @apiParam (Travel Data) {String{2..10000}} travelDescription Description of the travel
 * @apiParam (Travel Data) {String[]} [travelPictures] Url of an image (can be repeated 5 times)
 *
 * @apiParam (Travel Step) {Object[]} [travelSteps] Steps of the travel
 * @apiParam (Travel Step) {String{2..300}} [travelSteps.title] Title of the steps
 * @apiParam (Travel Step) {Number} [travelSteps.amount] Cost in eurocents of the step
 * @apiParam (Travel Step) {Number} [travelSteps.quoteNumber] Amount of quotes available
 *
 *
 */
export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}
export const UserFormErrorMessages = [
  new ErrorMessage(
    'plz', 'required', 'Bitte eine Postleitzahl angeben.'
  ),
  new ErrorMessage(
    'plz', 'min', 'Achten Sie bei der Eingabe bitte auf eine positive Mindestanzahl.'
  ),
  new ErrorMessage(
    'place', 'required', 'Bitte einen Bezirk angeben.'
  ),
  new ErrorMessage(
    'street', 'required', 'Bitte eine Straße angben.'),

  new ErrorMessage(
    'streetnumber', 'required', 'Bitte die Straßennummer angeben.')

];
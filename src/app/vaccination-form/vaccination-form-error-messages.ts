export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}
export const VaccinationFormErrorMessages = [
  new ErrorMessage(
    'amount', 'required', 'Bitte geben Sie den Wert für die maximale TeilnehmerInnenanzahl an.'
  ),
  new ErrorMessage(
    'amount', 'min', 'Achten Sie bei der Eingabe bitte auf eine positive Mindestanzahl.'
  ),
  new ErrorMessage(
    'date', 'required', 'Wählen Sie bitte ein Datum für die Impfung aus.'),

  new ErrorMessage(
    'start', 'required', 'Bitte Startzeit der Impfung angeben.'),

  new ErrorMessage(
    'end', 'required', 'Bitte Endzeit der Impfung angeben.'),

  new ErrorMessage(
    'location', 'required', 'Bitte einen Ort für die Impfung auswählen.')

];
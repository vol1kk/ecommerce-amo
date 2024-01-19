export function hideName(fullName: { name: string; surname: string }) {
  const hiddenSurname = fullName.surname
    .slice(0, 1)
    .padEnd(fullName.surname.length + 5, "*");

  return `${fullName.name} ${fullName.surname && hiddenSurname}`.trim();
}

export function hideEmail(email: string) {
  if (!email) return;

  const [name, domain] = email.split("@");
  if (!name || !domain) return;

  const [beforeDot, afterDot] = domain.split(".");

  if (!beforeDot || !afterDot) return;

  const VisibleSymbols = 3;
  const beforeAt = name
    .slice(0, VisibleSymbols)
    .padEnd(name.length + VisibleSymbols, "*");

  const afterAt =
    beforeDot.slice(0, 1).padEnd(5, "*") +
    "." +
    "".padStart(afterDot.length, "*");

  return `${beforeAt}@${afterAt}`;
}

export function hidePhone(phoneNumber: string) {
  const parsedData = phoneNumber.replace(/[+|-]/g, "");

  const numberBeginning = parsedData.slice(0, 6);
  const numberEnd = parsedData.slice(-2);

  const hiddenBeginning = numberBeginning.padEnd(
    parsedData.length - numberEnd.length,
    "*",
  );

  return hiddenBeginning + numberEnd;
}

export default function hideDetails(data: string, type: string) {
  switch (type) {
    case "email": {
      const [name, domain] = data?.split("@");
      const [beforeDot, afterDot] = domain?.split(".");

      const hiddenName = name.slice(0, 3).padEnd(10, "*");
      const hiddenDomain =
        beforeDot.slice(0, 1).padEnd(5, "*") +
        "." +
        "".padStart(afterDot.length, "*");

      return `${hiddenName}@${hiddenDomain}`;
    }

    case "name": {
      const fullName = JSON.parse(data) as { name: string; surname: string };

      const hiddenSurname = fullName.surname
        .slice(0, 1)
        .padEnd(fullName.surname.length + 2, "*");

      return `${fullName.name} ${fullName.surname && hiddenSurname}`.trim();
    }

    case "number": {
      const parsedData = data.replaceAll("-", "");

      const numberBeginning = parsedData.slice(0, 3);
      const numberEnd = parsedData.slice(-2);

      const hiddenBeginning = numberBeginning.padEnd(
        parsedData.length - numberEnd.length,
        "*",
      );

      return hiddenBeginning + numberEnd;
    }
  }
}

export function formatDuration(duration: string): string {
  if (duration === '--:--') {
    return 'Próximamente';
  }

  const parts = duration.split(':').map(Number);

  if (parts.some((part) => Number.isNaN(part))) {
    return duration;
  }

  let minutes = 0;
  let seconds = 0;

  if (parts.length === 2) {
    [minutes, seconds] = parts;
  } else if (parts.length === 3) {
    minutes = parts[0] * 60 + parts[1];
    seconds = parts[2];
  } else {
    return duration;
  }

  if (minutes === 0) {
    return `${seconds} s`;
  }

  if (seconds === 0) {
    return `${minutes} min`;
  }

  return `${minutes} min ${seconds} s`;
}

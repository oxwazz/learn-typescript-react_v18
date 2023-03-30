export function logInfo(title: string, ...args: any[]) {
  console.log(`%c${title}`, 'color:blue; font-weight:bold', ...args);
}

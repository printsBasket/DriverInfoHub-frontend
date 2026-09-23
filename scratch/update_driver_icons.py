from pathlib import Path
root = Path(r"D:\next-js\PrintSoftDrive\src\app\drivers")
replacements = [
    ("rounded-full bg-blue-100 text-blue-700", "rounded-full bg-blue-900 text-white"),
    ("rounded-xl bg-blue-100 text-blue-700", "rounded-xl bg-blue-900 text-white"),
    ("rounded-2xl bg-blue-100 text-blue-700", "rounded-2xl bg-blue-900 text-white"),
    ("rounded-full bg-slate-100 text-slate-700", "rounded-full bg-blue-900 text-white"),
    ("rounded-xl bg-slate-100 text-slate-700", "rounded-xl bg-blue-900 text-white"),
    ("rounded-2xl bg-slate-100 text-slate-700", "rounded-2xl bg-blue-900 text-white"),
    ("bg-gradient-to-br from-blue-600 to-indigo-500 text-white", "bg-blue-900 text-white"),
    ("bg-gradient-to-br from-slate-600 to-blue-500 text-white", "bg-blue-900 text-white"),
    ("bg-gradient-to-br from-blue-600 to-indigo-600 text-white", "bg-blue-900 text-white"),
]
changed = []
for path in root.rglob("page.tsx"):
    text = path.read_text(encoding="utf-8")
    new_text = text
    for old, new in replacements:
        new_text = new_text.replace(old, new)
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        changed.append(str(path))
print("\n".join(changed))

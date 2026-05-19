from fastapi import FastAPI, File, UploadFile

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to OncoVision AI Backend!"}

@app.post("/scans/analyze")
async def analyze_scan(file: UploadFile = File(...)):
    # هنا هنكتب الكود اللي بيحفظ الصورة
    # وبعدين يبعتها للـ AI Model بتاعنا
    
    return {
        "filename": file.filename,
        "status": "Pipeline Started",
        "mock_result": {
            "has_tumor": True,
            "confidence_score": 0.94,
            "risk_level": "High"
        }
    }
    # pip install fastapi uvicorn python-multipart
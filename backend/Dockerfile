FROM python:3.9
COPY . /app
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
WORKDIR ./app
RUN pip install --no-cache-dir --upgrade -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/

EXPOSE 80
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
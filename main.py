from application import create_app

app = create_app()


@app.route('/TEST')
def foo():
    return 'HELLO THIS IS A TEST::NIJIIRO'



if __name__ == '__main__':
    app.run(debug=True)
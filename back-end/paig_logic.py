def paige_process(message):
    if "data" in message.lower():
        return data_protection()
    else:
        return "Paige, the Data Protection Librarian, is at your service."

def data_protection():
    return "In bytes and bits, our trust we place, a sanctuary in cyberspace."

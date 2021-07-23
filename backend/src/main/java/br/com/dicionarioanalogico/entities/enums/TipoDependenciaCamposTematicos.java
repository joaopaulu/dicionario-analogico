package br.com.dicionarioanalogico.entities.enums;

public enum TipoDependenciaCamposTematicos {
    hip(1),
    mer(2),
    conProfissional(3),
    con(4),
    verbo(5);

    private int code;

    private TipoDependenciaCamposTematicos(Integer code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public static TipoDependenciaCamposTematicos toEnum(int code) {
        for (TipoDependenciaCamposTematicos x : TipoDependenciaCamposTematicos.values()) {
            if (code == x.getCode()) {
                return x;
            }
        }
        throw new IllegalArgumentException("Id inválido: " + code);
    }
}

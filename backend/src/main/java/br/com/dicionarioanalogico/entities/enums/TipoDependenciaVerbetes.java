package br.com.dicionarioanalogico.entities.enums;

public enum TipoDependenciaVerbetes {
     hip(1),
     mer(2),
     con1(3),
     con2(4),
     con3(5),
     con4(6),
     con5(7),
     con6(8),
     Verbo(9),
     sin(10),
     con7(11),
     con8(12),
     con9(13),
     con10(14),
     con11(15),
     con12(16),
     con13(17),
     con14(18),
     con15(19),
     con16(20),
     con17(21),
     con18(22),
     con19(23),
     con20(24);

     private int code;

     private TipoDependenciaVerbetes(Integer code) {
          this.code = code;
     }

     public int getCode() {
          return code;
     }

     public static TipoDependenciaVerbetes toEnum(int code) {
          for (TipoDependenciaVerbetes x : TipoDependenciaVerbetes.values()) {
               if (code == x.getCode()) {
                    return x;
               }
          }
          throw new IllegalArgumentException("Id inválido: " + code);
     }

}
